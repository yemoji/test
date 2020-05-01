
    import React from 'react';
    import Avatar from '@material-ui/core/Avatar';
    import Button from '@material-ui/core/Button';
    import CssBaseline from '@material-ui/core/CssBaseline';
    import TextField from '@material-ui/core/TextField';
    import FormControlLabel from '@material-ui/core/FormControlLabel';
    import Checkbox from '@material-ui/core/Checkbox';
    import Link from '@material-ui/core/Link';
    import Grid from '@material-ui/core/Grid';
    import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
    import Typography from '@material-ui/core/Typography';
    import { makeStyles } from '@material-ui/core/styles';
    import Container from '@material-ui/core/Container';
    import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
    import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
    import {bindActionCreators} from "redux";
    import * as actions from "../../redux/actions";
    import {connect} from "react-redux";
    function mapStateToProps(state) {
        return{
            users:state.users,
        }

    }
    function mapDispatchToProps(dispatch) {
        return bindActionCreators(actions,dispatch)

    }
    

    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        inputForm:{
            display:'flex',
            justifyContent:'space-around',
            alignItems:'center'
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        textField:{
            flexShrink:'1',
            flexBasis:"75%"
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
        signIn:{
            flexShrink:'1',
            flexBasis:"75%",
        }
    }));

    function Main(props) {
        console.log(props)
        const classes = useStyles();
        const handleSubmit=(e)=> {
            e.preventDefault();
            const email = e.target.elements.email.value;
            const pass = e.target.elements.password.value;
            const user = {
                id: Number(new Date()),
                email,
                pass
            }
            if(email&&pass){
                props.submitForm(user)
                props.history.push('/home')

            }
            else {
                alert('Ooops fill both input babe')
            }
        }

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Grid container className={classes.inputForm}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography className={classes.signIn} component="h1" variant="h5">
                            Sign in
                        </Typography>
                    </Grid>
                    <form onSubmit={handleSubmit} className={classes.form} noValidate>
                        <Grid container className={classes.inputForm}>
                            <EmailOutlinedIcon clasName={classes.emailIcon} style={{ fontSize: 40 }}/>
                            <TextField
                                className={classes.textField}
                                variant="outlined"
                                margin="normal"
                                required
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                        </Grid>
                        <Grid container className={classes.inputForm}>
                            <VpnKeyOutlinedIcon style={{ fontSize: 40 }}/>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                className={classes.textField}
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        );
    }
    export default connect(mapStateToProps,mapDispatchToProps)(Main)