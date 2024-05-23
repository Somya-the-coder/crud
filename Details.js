import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Details = () => {
    return (
        <div className="container mt-3">
            <h1 style={{ fintWeight: 400 }}>Welcome Somya Verma</h1>
            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                <div className="add_btn">
                            <button className="btn btn-primary mx-2"><CreateIcon /></button>
                            <button className="btn btn-danger"><DeleteOutlinedIcon /></button>
                        </div>     
                    <div className="row">
                    <div className="left_view col-lg-6 col-md-6 col-12">
                        <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                        <h3 className="mt-3">
                            Name: <span>Somya Verma</span>
                        </h3>
                        <h3 className="mt-3">
                            Age: <span>20</span>
                        </h3>
                        <p className="mt-3"><MailOutlinedIcon />
                            Email: <span>somyav.jsr@gmail.com</span>
                        </p>
                        <p className="mt-3"><WorkIcon    />
                            Occupation: <span>webdeveloper</span>
                        </p>
                    </div>
                    <div className="right_view col-lg-6 col-md-6 col-13">

                        <p className="mt-5"><PhoneAndroidIcon />mobile: <span>+91 9191919191</span></p>
                        <p className="mt-3"><LocationOnIcon />location: <span>Jamshedpur</span></p>
                        <p className="mt-3">Description: <span>Lorem ipsum dolor sit amet cosectetur adipisicing elit. Ipsum, molestiae</span></p>
                    </div>
                    </div>
                    
                </CardContent>
            </Card>
        </div>
    );
};

export default Details;
