import {Stack, FormControl, FormLabel, TextField, Button} from '@mui/material';
import {useForm} from 'react-hook-form';

const Register = () => {
    const {register, handleSubmit} = useForm()

    const onSubmit = (data: any) => {
        console.log(data);

    }

    return <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <FormControl sx={{marginBottom: '10px'}}>
                    <FormLabel htmlFor='name'>Name</FormLabel>
                    <TextField margin="dense" id="name" placeholder='name' fullWidth
                    size="small" {...register('name')}></TextField>
                </FormControl>
                <FormControl sx={{marginBottom: '10px'}}>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <TextField margin="dense" id="email" placeholder='email' fullWidth
                    size="small" {...register('email')}></TextField>
                </FormControl>
                <FormControl sx={{marginBottom: '10px'}}>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <TextField margin="dense" id="password" type="password" fullWidth
                    size="small" placeholder='password' {...register('password')}></TextField>
                </FormControl>
            </Stack>
            <Button variant="contained" type="submit">
                Submit 
            </Button>
        </form>
    </div>
}

export default Register; 