import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllUser } from '../redux/userSlice'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const UserList = () => {
    const { users } = useSelector((store) => store.user)

    const dispatch = useDispatch()
    useEffect(() => {
        //git userleri çek state koy dedik simdi statelere koyduğumuz değerleri useSelector ile çekecez
        dispatch(getAllUser())
    }, [])


    return (
        <>
            {users && users.map((item) => (
                <Card key={item.id} sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                            {item.name}
                        </Typography>
                        <Typography variant="h5" component="div">
                            be{item.id}nev{item.email}o{item.phone}lent
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            ))
            }
        </>
    )

}

export default UserList