use bdreserva;

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