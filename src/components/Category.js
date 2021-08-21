import axios from 'axios';
import {useState, useEffect} from 'react';
import styled from 'styled-components';

const CategoryBox = styled.aside`
  height: auto;
  width: 200px;
  border-right: 1px solid gray;
`;

const ACategory = styled.div`
  width: 200px;
  margin-top: 10px;
  margin-left: 20px;
`;

const MainCategory = styled.dt`
  font-size: 18px;
  font-weight: bold;
`;

const SubCategory = styled.dd`
  font-size: 15px;
  font-weight: normal;
`;

/* eslint-disable */
const Category = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_ORIGIN}/letters/categories`)
            .then(({data: {data}}) => {
               setCategory(data);
            })
            .catch((err) => err);
    }, []);

    return (
        <>
            <CategoryBox>
                {category && category.map(({key, main_category: mainCategory, value}) => (
                    <ACategory key={key}>
                        <MainCategory>{mainCategory}</MainCategory>
                        {value.map(subCategory => (
                            <SubCategory key={subCategory}>{subCategory}</SubCategory>
                        ))}
                    </ACategory>
                ))}
            </CategoryBox>
        </>
    );
}

export default Category;