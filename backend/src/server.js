import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api.js';
import artifactoryRoutes from './routes/artifactory.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/artifactory', artifactoryRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));