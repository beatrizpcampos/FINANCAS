import styled from "styled-components";

export const Background = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`

export const ListBalance = styled.FlatList`
  max-height: 190px;
`

export const Area = styled.View`
  margin-top: 22px;
  background-color:rgb(247, 246, 246);
  border-top-right-radius: 60px;
  border-top-left-radius: 60px;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 25px;
  align-items: center;
`

export const Title = styled.Text`
  margin-left: 4px;
  color: rgb(65, 64, 64);
  font-weight: 500;
  font-size: 19px;
`
export const List = styled.FlatList`
  flex: 1;
  background-color:rgb(247, 246, 246);
`