import React, { useState } from 'react';
import {
  Container,
  Tabs,
  Tab,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import WorkIcon from '@mui/icons-material/Work';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';

const SectionPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
  background: 'linear-gradient(135deg, #f9f9ff 30%, #e0e7ff 100%)',
  borderRadius: '16px',
  boxShadow: '0px 6px 30px rgba(0, 0, 0, 0.1)'
}));

const PageWrapper = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  background: 'linear-gradient(to bottom right, #bbdefb, #e3f2fd)',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start'
}));

function Dashboard() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <PageWrapper>
      <Container maxWidth="md" sx={{ backgroundColor: '#ffffff', padding: 4, borderRadius: 4, boxShadow: 3 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#1e88e5' }}>
          🎯 Candidate Dashboard
        </Typography>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          centered
          textColor="primary"
          indicatorColor="secondary"
        >
          <Tab label="Complete Profile" icon={<AccountCircleIcon />} />
          <Tab label="Build Resume" icon={<DescriptionIcon />} />
          <Tab label="Opportunities" icon={<WorkIcon />} />
          <Tab label="Track Applications" />
        </Tabs>

        <TabPanel value={tabIndex} index={0}>
          <SectionPaper>
            <Typography variant="h6" gutterBottom color="primary">Complete Your Profile</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}><TextField fullWidth label="Full Name" color="secondary" /></Grid>
              <Grid item xs={12} sm={6}><TextField fullWidth label="Email Address" color="secondary" /></Grid>
              <Grid item xs={12} sm={6}><TextField fullWidth label="Phone Number" color="secondary" /></Grid>
              <Grid item xs={12} sm={6}><TextField fullWidth label="LinkedIn Profile" color="secondary" /></Grid>
            </Grid>
            <Box display="flex" gap={2} mt={2}>
              <Button variant="contained" color="secondary">Save Profile</Button>
              <Button variant="outlined" component="label" color="primary">
                Upload Resume
                <input type="file" hidden />
              </Button>
            </Box>
          </SectionPaper>
        </TabPanel>

        <TabPanel value={tabIndex} index={1}>
          <SectionPaper>
            <Typography variant="h6" gutterBottom color="primary">Build Your Resume</Typography>
            <TextField fullWidth label="Education" multiline rows={3} margin="normal" color="secondary" />
            <TextField fullWidth label="Experience" multiline rows={3} margin="normal" color="secondary" />
            <TextField fullWidth label="Skills (comma separated)" margin="normal" color="secondary" />
            <Button variant="contained" sx={{ mt: 2 }} color="secondary">Generate Resume</Button>
          </SectionPaper>
        </TabPanel>

        <TabPanel value={tabIndex} index={2}>
          <SectionPaper>
            <Typography variant="h6" gutterBottom color="primary">Explore Job Opportunities</Typography>
            <Box display="flex" flexDirection="column" gap={2}>
              <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#f3f4f6' }}>
                <Typography variant="subtitle1" fontWeight="bold">Frontend Developer - Google</Typography>
                <Typography variant="body2">Location: Remote</Typography>
                <Chip label="React" color="primary" sx={{ mr: 1 }} />
                <Chip label="JavaScript" color="secondary" />
                <Button variant="outlined" color="primary" sx={{ mt: 1 }}>Apply Now</Button>
              </Paper>
              <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#f3f4f6' }}>
                <Typography variant="subtitle1" fontWeight="bold">Backend Developer - Amazon</Typography>
                <Typography variant="body2">Location: Bengaluru</Typography>
                <Chip label="Node.js" color="primary" sx={{ mr: 1 }} />
                <Chip label="MySQL" color="secondary" />
                <Button variant="outlined" color="primary" sx={{ mt: 1 }}>Apply Now</Button>
              </Paper>
            </Box>
          </SectionPaper>
        </TabPanel>

        <TabPanel value={tabIndex} index={3}>
          <SectionPaper>
            <Typography variant="h6" gutterBottom color="primary">Track Your Applications</Typography>
            <Typography color="text.secondary">No applications yet. Apply to jobs and track status here.</Typography>
          </SectionPaper>
        </TabPanel>
      </Container>
    </PageWrapper>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

export default Dashboard;
