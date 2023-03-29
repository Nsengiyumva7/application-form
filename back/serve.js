//IMPORTS
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const pool = require("./db.js");
const cors = require("cors");
require("dotenv").config();
// Middleware
app.use(bodyParser.json());

// Routes
app.get("/form", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM form");
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/form/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const { rows } = await pool.query("SELECT * FROM form WHERE id = $1", [
      id,
    ]);
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/form", async (req, res) => {

  try {
    const {name,
          telephone,
          email,
          place,
          sex,
          date_of_birth,
          id_number,
          name_of_company,
          place_of_company,
          visino_of_company,
          mission_of_company,
          date_of_start_working,
          name_request_company,
          title_person,
          telephone_person_company,
          place_of_person_company,
          id_number_person_company,
          email_person_company,
          sex_person_company,
          date_of_birth_company_person,
          forall,
          
          havestings_project,
          role_of_project,
          contribution_youth_project,
          connection_teckinolog,
          uniqueness_project,
        cause_presence, } = req.body;
    console.log({ name,
          telephone,
          email,
          place,
          sex,
          date_of_birth,
          id_number,
          name_of_company,
          place_of_company,
          visino_of_company,
          mission_of_company,
          date_of_start_working,
          name_request_company,
          title_person,
          telephone_person_company,
          place_of_person_company,
          id_number_person_company,
          email_person_company,
          sex_person_company,
          date_of_birth_company_person,
          forall,
          
          havestings_project,
          role_of_project,
          contribution_youth_project,
          connection_teckinolog,
          uniqueness_project,
        cause_presence, });
    const insertQuery = "INSERT INTO form ( name,telephone,email,place,sex,date_of_birth,id_number,name_of_company,place_of_company,visino_of_company,mission_of_company,date_of_start_working,name_request_company,title_person,telephone_person_company,place_of_person_company,id_number_person_company,email_person_company,sex_person_company,date_of_birth_company_person,forall,havestings_project,role_of_project,contribution_youth_project,connection_teckinolog,uniqueness_project,cause_presence) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27)";
    const values = [name,
          telephone,
          email,
          place,
          sex,
          date_of_birth,
          id_number,
          name_of_company,
          place_of_company,
          visino_of_company,
          mission_of_company,
          date_of_start_working,
          name_request_company,
          title_person,
          telephone_person_company,
          place_of_person_company,
          id_number_person_company,
          email_person_company,
          sex_person_company,
          date_of_birth_company_person,
          forall,
          
          havestings_project,
          role_of_project,
          contribution_youth_project,
          connection_teckinolog,
          uniqueness_project,
        cause_presence, ];

    pool.query(insertQuery, values, (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send("Error has occured");
      } else {
        console.log("Data inserted successfully");
        res.status(200).send("Data inserted successfully");
      }
    });
  } catch (error) {
    console.log(error.message);
  }

});

app.put("/form/:id", async (req, res) => {
  const id = req.params.id;
  const { name,
    telephone,
          email,
          place,
          sex,
          date_of_birth,
          id_number,
          name_of_company,
          place_of_company,
          visino_of_company,
          mission_of_company,
          date_of_start_working,
          name_request_company,
          title_person,
          telephone_person_company,
          place_of_person_company,
          id_number_person_company,
          email_person_company,
          sex_person_company,
          date_of_birth_company_person,
          forall,
          havestings_project,
          role_of_project,
          contribution_youth_project,
          connection_teckinolog,
          uniqueness_project,
           cause_presence } = req.body;
  try {
    const { rows } = await pool.query(
      "UPDATE form SET name = $1, telephone =$2, email=$3, place=$4, sex=$5, date_of_birth=$6, id_number=$8, name_of_company=$8, place_of_company=$9, visino_of_company=$10, mission_of_company=$11, date_of_start_working=$12, name_request_company=$13, title_person=$14, telephone_person_company=$15, place_of_person_company=$16 ,id_number_person_company=$17 ,email_person_company=$18 ,sex_person_company=$19 ,date_of_birth_company_person=$20 ,forall=$21  ,havestings_project=$22 ,role_of_project=$23 ,contribution_youth_project=$24 ,connection_teckinolog==$25 ,uniqueness_project=$26 ,cause_presence=$27 WHERE id = $28 RETURNING *",
      [name,
          telephone,
          email,
          place,
          sex,
          date_of_birth,
          id_number,
          name_of_company,
          place_of_company,
          visino_of_company,
          mission_of_company,
          date_of_start_working,
          name_request_company,
          title_person,
          telephone_person_company,
          place_of_person_company,
          id_number_person_company,
          email_person_company,
          sex_person_company,
          date_of_birth_company_person,
          forall,
          havestings_project,
          role_of_project,
          contribution_youth_project,
          connection_teckinolog,
          uniqueness_project, 
          cause_presence,id]
    );
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/form/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await pool.query("DELETE FROM form WHERE id = $1", [id]);
    res.status(204).json(res.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = 3009;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
