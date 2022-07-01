import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  font-family: 'Roboto';
`
export const MainHeading = styled.h1`
  font-weight: 500;
  font-size: size 26px;
  color: #35469c;
`
export const InputContainer = styled.div`
  width: 100%;
`

export const Label = styled.label`
  color: #7e858e;
  font-size: 14px;
`
export const Input = styled.input`
  width: 100%;
  margin-top: 8px;
  border: 1px solid #7e858e;
  height: 40px;
  border-radius: 8px;
  margin-bottom: 20px;
  color: #7e858e;
  padding-left: 15px;
  outline: none;
`
export const Select = styled.select`
  width: 100%;
  margin-top: 8px;
  border: 1px solid #7e858e;
  height: 40px;
  border-radius: 8px;
  margin-bottom: 20px;
  color: #7e858e;
  padding-left: 15px;
  outline: none;
`
export const Option = styled.option`
  width: 80%;
`
export const Button = styled.button`
  background-color: #0b69ff;
  border: none;
  align-self: flex-start;
  color: white;
  font-size: 13px;
  height: 30px;
  width: 100px;
  border-radius: 6px;
`
export const MemeContainer = styled.div`
  background-image: url(`${props => props.imageUrl}`);
`
