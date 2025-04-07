import React from 'react';
import styled from 'styled-components';
import { FaPlus, FaTrash, FaList, FaChartLine, FaUserTie } from 'react-icons/fa';

const AppContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  background: #f5f7fa;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e1e5eb;
`;

const Title = styled.h1`
  color: #2c3e50;
  margin: 0;
  font-size: 28px;
  font-weight: 600;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #3498db;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

const DashboardCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  padding: 25px;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const CardIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: ${props => props.color || '#3498db'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: white;
  font-size: 20px;
`;

const CardTitle = styled.h2`
  color: #2c3e50;
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`;

const CardDescription = styled.p`
  color: #7f8c8d;
  margin: 10px 0 20px;
  font-size: 14px;
`;

const CardButton = styled.button`
  background: ${props => props.color || '#3498db'};
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  transition: background 0.2s;
  
  &:hover {
    background: ${props => props.hoverColor || '#2980b9'};
  }
`;

function App() {
  return (
    <AppContainer>
      <Header>
        <Title>Resume Shortlister Admin</Title>
        <UserProfile>
          <span>Admin User</span>
          <UserAvatar>A</UserAvatar>
        </UserProfile>
      </Header>

      <DashboardGrid>
        <DashboardCard>
          <CardHeader>
            <CardIcon color="#2ecc71">
              <FaPlus />
            </CardIcon>
            <CardTitle>Add Jobs</CardTitle>
          </CardHeader>
          <CardDescription>
            Create and post new job openings with detailed requirements and descriptions.
          </CardDescription>
          <CardButton color="#2ecc71" hoverColor="#27ae60">
            Add New Job
          </CardButton>
        </DashboardCard>

        <DashboardCard>
          <CardHeader>
            <CardIcon color="#e74c3c">
              <FaTrash />
            </CardIcon>
            <CardTitle>Remove Jobs</CardTitle>
          </CardHeader>
          <CardDescription>
            Manage and remove expired or filled job positions from the system.
          </CardDescription>
          <CardButton color="#e74c3c" hoverColor="#c0392b">
            Manage Jobs
          </CardButton>
        </DashboardCard>

        <DashboardCard>
          <CardHeader>
            <CardIcon color="#3498db">
              <FaList />
            </CardIcon>
            <CardTitle>Shortlisted Candidates</CardTitle>
          </CardHeader>
          <CardDescription>
            View and manage candidates who have been shortlisted for various positions.
          </CardDescription>
          <CardButton color="#3498db" hoverColor="#2980b9">
            View Candidates
          </CardButton>
        </DashboardCard>

        <DashboardCard>
          <CardHeader>
            <CardIcon color="#9b59b6">
              <FaChartLine />
            </CardIcon>
            <CardTitle>AI Analysis</CardTitle>
          </CardHeader>
          <CardDescription>
            Access detailed AI-driven insights and analytics about candidates and hiring trends.
          </CardDescription>
          <CardButton color="#9b59b6" hoverColor="#8e44ad">
            View Analysis
          </CardButton>
        </DashboardCard>

        <DashboardCard>
          <CardHeader>
            <CardIcon color="#f39c12">
              <FaUserTie />
            </CardIcon>
            <CardTitle>Candidate Pool</CardTitle>
          </CardHeader>
          <CardDescription>
            Browse through all applicants and their resumes in the system database.
          </CardDescription>
          <CardButton color="#f39c12" hoverColor="#e67e22">
            Explore Candidates
          </CardButton>
        </DashboardCard>
      </DashboardGrid>
    </AppContainer>
  );
}

export default App;