import { useEffect, useState } from "react";
import { Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

import { Patient } from "../../types";
import { useParams } from "react-router-dom";
import { apiBaseUrl } from "../../constants";

  const PatientPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
  
    const [patient, setPatient] = useState<Patient | null>(null);

    useEffect(() => {
      const fetchPatient = async () => {
        if (!id) return;
  
        try {
          const response = await axios.get<Patient>(`${apiBaseUrl}/patients/${id}`);
          setPatient(response.data);
        } catch (err: unknown) {
          console.error(err);
        }
      };
  
      fetchPatient();
    }, [id]);

    if (!patient) {
      return null;
    }
  
    return (
      <Card sx={{ margin: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {patient.name}
          </Typography>
          <Typography variant="body1">
            <strong>Date of birth:</strong> {patient.dateOfBirth || "N/A"}
          </Typography>
          <Typography variant="body1">
            <strong>Gender:</strong> {patient.gender || "N/A"}
          </Typography>
          <Typography variant="body1">
            <strong>Occupation:</strong> {patient.occupation || "N/A"}
          </Typography>
  
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Entries
          </Typography>
          {patient.entries && patient.entries.length > 0 ? (
            patient.entries.map((entry) => (
              <Card key={entry.id} variant="outlined" sx={{ marginY: 1 }}>
                <CardContent>
                  <Typography variant="body1">
                    <strong>Date:</strong> {entry.date}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Description:</strong> {entry.description}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Diagnosis codes:</strong> {entry.diagnosisCodes?.join(", ")}
                  </Typography>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant="body2">No entries</Typography>
          )}
        </CardContent>
      </Card>
    );
  };
  
  export default PatientPage;