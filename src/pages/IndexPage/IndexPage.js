import './IndexPage.css'
import Header from '../../components/home-page/Header/Header';
import Footer from '../../components/home-page/Footer/Footer';
import Main from '../../components/home-page/Main/Main';
import { useState } from 'react';

function IndexPage() {
    const [searchValue, setSearchValue] = useState('')

    return (
        <div className="wrapper">
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <Main searchValue={searchValue} />
            <Footer />
        </div>
    )
}

export default IndexPage;
