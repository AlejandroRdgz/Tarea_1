/* Alejandro Rodriguez Gonzalez 271578   */

/* Pregunta 1) Baja el archivo grades.json y en la terminal ejecuta el siguiente comando:*/
	

	$ mongoimport -d students -c grades < grades.json

/*
	Respuesta:
	2015-09-28T18:01:07.763-0600	connected to: localhost
	2015-09-28T15:01:08.398-0600	imported 800 documents

*/

/* Pregunta 2) El conjunto de datos contiene 4 calificaciones de n estudiantes. Confirma que se importo correctamente la colección con los siguientes comandos en la terminal de mongo:


	>use students;
	>db.grades.count()


    	cuantos registros arrojo el comando count?
*/

	use students;

/* 
	Respuesta:
	switched to db students
*/
	db.grades.count()

/*
	Respuesta:
	800
*/


/* Pregunta 3) Encuentra todas las calificaciones del estudiante con el id numero 4  */

	db.grades.find({"students_id":4}).pretty();
/*
	Respuesta:
	{
	"_id" : ObjectId("50906d7fa3c412bb040eb587"),
	"student_id" : 4,
	"type" : "exam",
	"score" : 87.89071881934647
	}
	{
	"_id" : ObjectId("50906d7fa3c412bb040eb588"),
	"student_id" : 4,
	"type" : "quiz",
	"score" : 27.29006335059361
	}
	{
	"_id" : ObjectId("50906d7fa3c412bb040eb589"),
	"student_id" : 4,
	"type" : "homework",
	"score" : 5.244452510818443
	}
	{
	"_id" : ObjectId("50906d7fa3c412bb040eb58a"),
	"student_id" : 4,
	"type" : "homework",
	"score" : 28.656451042441
	}

/* Pregunta 4) ¿Cuantos registros hay de tipo exam?*/

	db.grades.find({"type":"exam"}).count();

/*
	Respuesta:
	200
*/


/* Pregunta 5) ¿Cuantos registros hay de tipo homework?*/
	
	db.grades.find({"type":"homework"}).count();

/*
	Respuesta:
	400
*/


/* Pregunta 6) ¿Cuantos registros hay de tipo quiz?*/


	db.grades.find({"type":"quiz"}).count();

/*
	Respuesta:
	200
*/

/* Pregunta 7) Elimina todas las calificaciones del estudiante con el id numero 3 */


	db.grades.update({"student_id":3},{$set:{"score":""}},{multi:true});

/*
	Respuesta:
	WriteResult({ "nMatched" : 4, "nUpserted" : 0, "nModified" : 3 })
*/

/* Pregunta 8) ¿Que estudiantes obtuvieron 75.29561445722392 en una tarea ?  */

	db.grades.find({$and:[{"score":75.29561445722392},{"type":"homework"}]}).pretty();

/*
	Respuesta:
	{
	"_id" : ObjectId("50906d7fa3c412bb040eb59e"),
	"student_id" : 9,
	"type" : "homework",
	"score" : 75.29561445722392
	}
*/


/* Pregunta 9) Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100 */


	db.grades.update({"_id":ObjectId("50906d7fa3c412bb040eb591")},{$set:{"score":100}});

/*
	Respuesta:
	db.grades.update({"_id":ObjectId("50906d7fa3c412bb040eb591")},{$set:{"score":100}});

*/


/* Pregunta 10) A que estudiante pertenece esta calificación. */

	db.grades.find({"score":100}).pretty();
/*
	Respuesta:
	
	{
	"_id" : ObjectId("50906d7fa3c412bb040eb591"),
	"student_id" : 6,
	"type" : "homework",
	"score" : 100
	}

*/
	































	















