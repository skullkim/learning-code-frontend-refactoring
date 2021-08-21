import styled from 'styled-components';

const CategoryBox = styled.aside`
  height: 900px;
  width: 200px;
  background-color: red;
`;

const MainCategory = styled.dt`
  font-size: 20px;
  font-weight: bold;
`;

const SubCategory = styled.dd`
  font-size: 15px;
  font-weight: normal;
`;

const Category = () => {
    return (
        <>
            <CategoryBox>
                <MainCategory>Main</MainCategory>
                <SubCategory>Sub</SubCategory>
            </CategoryBox>
        </>
    );
}

export default Category;