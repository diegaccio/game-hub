import axios from "axios";

export default axios.create({ baseURL: 'https://api.rawg.io/api',  params: { key: '771cdb15372b4d59bab8dbaf36cf432a' } });