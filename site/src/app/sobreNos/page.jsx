"use client";
import Navbar from '@/components/a_navbar';
import MidllleSobreNos from '@/components/g_midle_sobreNos';
import Footer from '@/components/c_footer';
import style from './style.css';


const sobreNos= () => {
    return(
        <main>
            <Navbar></Navbar>
            <MidllleSobreNos></MidllleSobreNos>
            <Footer></Footer>
        </main>
    )
};

export default sobreNos;
