import { createContext, useState, useEffect } from "react";

import { getCategoriesandDocuments } from "../utils/firebase/firebase.utils";

/*import { geCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
 para o useEffect below
import SHOP_DATA from '../shop-data.js';*/

export const CategoriesContext = createContext({
    categoriesMap: {}
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    
    /*
    escreve os daddos no db - usa apenas uma vez
    useEffect(() => {
        addCollectionAndDocuments('categories', SHOP_DATA);
    }, []);*/

    useEffect(() => {
        const getCategoriesMap = async () => {
            try {
                const categoryMap = await getCategoriesandDocuments();
                setCategoriesMap(categoryMap);
            } catch (error) {
                console.log(error + 'nao foi possivel pegar categorias')
            }
            
        }
        getCategoriesMap();
    }, [])

    const value = { categoriesMap }
    return (
        <CategoriesContext.Provider value={value}> 
            {children} 
        </CategoriesContext.Provider>
    )
}