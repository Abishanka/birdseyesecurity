CCSFS Alarm Log Software Developer Manual

Contributors: 
Leon Kwan, Grace Hu, Abishanka Saha, Alec Rothenberg 

Description: 
We were in the process of creating a full stack CRUD application using ReactJS and Bootstrap components for the front-end, as well as ExpressJS and a Postgres Database for the back-end. Axios is used to send http requests and responses. 

What Has Already Been Implemented:
Alarm log table UI (alarm console operator must click “add” button to create a new row, and the “edit button” to edit a row’s contents).
Automatic filling of certain cells (Date, Shift, Time).
Navigation bar with a tab for editing alarm data that is password protected + a tutorials tab. Currently, the password is stored statically in the code as “hello”. However, an authentication server could be used to advance this feature. 
Automatic generation of csv file that includes all the rows’ data.
HTTP request sent using Axios when a row is saved. 
Routes for sending GET, POST, and PUT requests. 

What Still Needs To Be Implemented:
Auto generation of csv file into exact NAR FAR format.
File drag and drop feature that allows a user to upload several csv files and put the false + nuisance alarms into a Form-75 file.
A file that matches alarm points to their corresponding alarm tag,building name, building #, alarm name, alarm #, and sensor status.
Successfully storing the data sent from the Axios HTTP request in the Postgres database.
Creating a Postgres database local to CCSFS computers.
Having alarm console operators test out the software. 
Rigorous testing and deployment.
