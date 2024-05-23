import React from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Home = () => {
    return (
        <div className="mt-5">
            <div className="container">
                <div className="add_btn mt-2 m-2">
                    <button className="btn btn-primary">Add data</button>
                </div>

                <table class="table">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">id</th>
                            <th scope="col">Username</th>
                            <th scope="col">email</th>
                            <th scope="col">Job</th>
                            <th scope="col">Number</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>meet</td>
                            <td>meet@gmail.com</td>
                            <td>Webdeveloper</td>
                            <td>9191919191</td>
                            <td className="d-flex justify-content-between">
                                <button className="btn btn-success"><RemoveRedEyeIcon /></button>
                                {/* above are classname in bootstrap check in documentation */}
                                <button className="btn btn-primary"><CreateIcon /></button>
                                <button className="btn btn-danger"><DeleteOutlinedIcon /></button>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">1</th>
                            <td>meet</td>
                            <td>meet@gmail.com</td>
                            <td>Webdeveloper</td>
                            <td>9191919191</td>
                            <td className="d-flex justify-content-between">
                            <button className="btn btn-success"><RemoveRedEyeIcon /></button>
                                {/* above are classname in bootstrap check in documentation */}
                                <button className="btn btn-primary"><CreateIcon /></button>
                                <button className="btn btn-danger"><DeleteOutlinedIcon /></button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
