create table docentes(
	id serial,
	name varchar(55),
	lastname varchar(55),
	surname varchar(55),
	curp varchar(18),
	email varchar(50),
	primary key(id)
)

create table areaGestora(
	id serial,
	acronimo varchar(25),
	nombre varchar (99),
	primary key(id)
)

create table capacitaciones(
    numConsecutivo serial,
	
)
