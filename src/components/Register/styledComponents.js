import styled from 'styled-components'

export const BodyContainer = styled.div`
  height: 100vh;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ResponsiveRegisterContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const RegisterImage = styled.img`
  width: 40%;
`
export const FormContainer = styled.form`
  padding: 10px;
  width: 50%;
`
export const RegisterLoginHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  color: #334155;
  font-weight: 600;
`
export const InputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`
export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #7b8794;
`
export const Input = styled.input`
  height: 40px;
  font-family: 'Roboto';
  border-radius: 8px;
  font-size: 16px;
  color: #64748b;
  padding: 10px;
  border: 1px solid #cbd5e1;
  outline: none;
`
export const Select = styled.select`
  height: 40px;
  font-family: 'Roboto';
  border-radius: 8px;
  font-size: 16px;
  color: #64748b;
  padding: 10px;
  border: 1px solid #cbd5e1;
  outline: none;
`
export const Option = styled.option`
  outline: none;
`
export const RegisterNotButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  padding: 8px 20px 8px 20px;
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: #3b82f6;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
`
