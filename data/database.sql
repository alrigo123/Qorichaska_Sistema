drop database if exists bdreservatest;
create database bdreservatest;
use bdreservatest;

-- tabla cliente, contiene los datos de los clientes que hagan una reserva
create table tcliente(
	id_cliente varchar(5) primary key not null,
    nombre_titular varchar(30) not null,
    apellidos varchar(55) not null,
    tipo_documento varchar(40) not null check (tipo_documento in ('PASAPORTE','DNI')),
    email varchar(99) not null,
    fecha_nac date,
    nro_telefono varchar(15)
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
