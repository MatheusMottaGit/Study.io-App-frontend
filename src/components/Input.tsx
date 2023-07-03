import React from 'react'

import { Input as NativeBaseInput, IInputProps } from 'native-base'

type Props = IInputProps & {
  errorMessage?: string | null
}

const Input = ({ errorMessage = null, ...rest }: Props) => {
  return (
    <NativeBaseInput 
      variant={'underlined'}
      borderBottomColor={'#FFF'}
      borderBottomWidth={'2'}
      placeholderTextColor={'#FFF'}
      className='font-body'
      {...rest}
    />  
  )
}

export default Input