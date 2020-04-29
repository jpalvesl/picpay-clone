import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`;

export const Container = styled.ScrollView`
  margin-bottom: 25px;
`;

export const UseBalance = styled.View`
  background: #1c1c1e;
  height: 60px;
  flex-direction: row;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;
