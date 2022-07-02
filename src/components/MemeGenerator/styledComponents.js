import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`
export const MainHeading = styled.h1`
  font-weight: 500;
  font-size: size 26px;
  color: #35469c;
`
export const InputContainer = styled.div`
  width: 100%;
`
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
  }
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
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  width: 100%;
  max-width: 300px;
  height: 40vh;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media screen and (min-width: 768px) {
    order: 1;
  }
`
export const Text = styled.p`
  font-size: ${props => props.fontSize}px;
  color: white;
  text-align: center;
`
