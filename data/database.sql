drop database if exists bdreservatest;
create database bdreservatest;
use bdreservatest;

-- tabla cliente, contiene los datos de los clientes que hagan una reserva
create table tcliente(
	id_cliente varchar(5) primary key not null,
    nombre_titular varchar(30) not null,
    apellidos varchar(55) not null,
    tipo_documento varchar(40) not null check (tipo_documento in ('PASAPORTE','DNI','OTRO')),
    nro_documento varchar(30) not null,
    pais_or varchar(20) not null,
    ciudad varchar(20) not null,
    email varchar(99) not null,
    fecha_nac date not null,
    nro_telefono varchar(15) not null
    );
    
-- tabla pago, datos del pago de una reserva
-- preadelanto es el pago preliminar
-- cuota total es la cancelación del total de la reserva, con la suma de todas las habitaciones
-- y el tiempo de estadia
create table tpago(
	id_pago varchar(5) primary key not null,
    metodo varchar(50) not null check (metodo in ('TARJETA','DEPOSITO EFECTIVO')),
    preadelanto float not null,
    cuota_total float not null
);

-- tabla habitacion, contiene los datos de las habitaciones
create table thabitacion(
	id_habitacion varchar(3) primary key not null,
    estado varchar(33) not null check (estado in ('OCUPADA','LIBRE','RESERVADA')),
    precio float not null,
    tipo varchar(33) not null check (tipo in('SIMPLE','DOBLE','TRIPLE','MATRIMONIAL','SUITE')),
    nro_personas_max int not null
);

-- tabla reserva, datos necesarios para la validación de la reserva
-- fecha arribo, dia de llegada de los clientes
-- fecha salida, fecha de salida de los clientes
-- fecha salida se calcula a partir de la duracion de estadia especificada por el cliente
create table treserva(
	id_reserva varchar(5) primary key not null,
    id_cliente varchar(5) not null,
    id_pago varchar(5) not null,
    fecha_arribo date not null,
    fecha_salida date not null,
    nro_habitaciones int not null,
    nro_personas int not null,
    estado varchar(33) not null check (estado in ('EN ESPERA','VALIDADA','RETRASADA')),
    duracion_estadia int not null,
    constraint fk_idcliente_tcliente foreign key (id_cliente) references tcliente(id_cliente),
    constraint fk_idpago_tpago foreign key (id_pago) references tpago(id_pago)
);

-- tabla habitacion reservada, vincula la tabla reserva y la tabla habitacion 
-- por nuestra sanidad mental al hacer consultas
-- id reserva se replica mientras que un idreserva contiene un idhabitacion,
-- creciendo dependiendo de la cantidad escogida por el cliente
-- sirve tambien para mantener el registro de la reserva en la BD
create table hab_reserva(
	id_habitacion varchar(3) not null,
    id_reserva varchar(5) not null,
    constraint fk_idhab_thab foreign key (id_habitacion) references thabitacion(id_habitacion),
    constraint fk_idreserva_tres foreign key (id_reserva) references treserva(id_reserva)
);

--
-- Volcado de datos para la tabla `thabitacion`
--

INSERT INTO `thabitacion` (`id_habitacion`, `estado`, `precio`, `tipo`, `nro_personas_max`) VALUES
('H01', 'OCUPADA', 100, 'SIMPLE', 1),
('H02', 'LIBRE', 150, 'DOBLE', 2),
('H03', 'LIBRE', 200, 'TRIPLE', 3),
('H04', 'OCUPADA', 250, 'MATRIMONIAL', 2),
('H05', 'LIBRE', 350, 'SUITE', 2);
COMMIT;


DROP procedure IF EXISTS insertar_datos;
DELIMITER $$
create procedure insertar_datos(
  -- entrada tpago
  in metodop varchar(50),
  in preadelantop float,
  in cuota_totalp float,
  -- entrada tcliente
  in nombre_titularp varchar(50),
  in apellidosp varchar(50),
  in tipo_documentop varchar(50),
  in nro_documentop varchar(50),
  in pais_orp varchar(50),
  in ciudadp varchar(50),
  in emailp varchar(50),
  in fecha_nacp date,
  in nro_telefonop varchar(50),
  -- entrada treserva
  in fecha_arribop date,
  in fecha_salidap date,
  in nro_habitacionesp int,
  in nro_personasp int,
  in estadop varchar(50),
  in duracion_estadiap int
)
begin
  declare idp int;
  declare idc int;
  -- insertar datos en tpago
  insert into tpago(metodo,preadelanto,cuota_total) values(metodop, preadelantop, cuota_totalp);
  set idp = last_insert_id();
  -- insertar datos en tcliente
  insert into tcliente(nombre_titular,apellidos,tipo_documento,nro_documento,pais_or,ciudad,email,fecha_nac,nro_telefono) values(nombre_titularp,apellidosp,tipo_documentop,nro_documentop,pais_orp,ciudadp,emailp,fecha_nacp,nro_telefonop);
  set idc = last_insert_id();
  -- insertar datos en treserva
  insert into treserva(id_cliente,id_pago,fecha_arribo,fecha_salida,nro_habitaciones,nro_personas,estado,duracion_estadia) values(idc,idp,fecha_arribop,fecha_salidap,nro_habitacionesp,nro_personasp,estadop,duracion_estadiap);
end $$
DELIMITER ;

CALL insertar_datos('TARJETA', 150, 280, 'Jose', 'Gamarra', 'DNI', '15568921', 'Peru', 'Arequipa', 'joseg@gmail.com', '1992-04-05', '92178546', '2021-12-02', '2021-12-12', 1, 2, 'VALIDADA', 10);