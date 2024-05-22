import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./Home";
import Atv1 from "./Atv1";
import Atv2 from "./Atv2";
import Atv3 from "./Atv3";
import Atv4 from "./Atv4";
import Atv5 from './Atv5';


export default function minhasRotas(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/atv1" element={<Atv1 />} />
            <Route path="/atv2" element={<Atv2 />} />
            <Route path="/atv3" element={<Atv3 />} />
            <Route path="/atv4" element={<Atv4 />} />
            <Route path="/atv5" element={<Atv5 />} />
        </Routes>
        </BrowserRouter>
    );
}

