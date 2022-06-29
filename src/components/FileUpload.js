import React from 'react';
// import {useEffect, useState} from 'react';
// import axios from 'axios';


function FileUpload () {
    // const onSubmit = async event => {
    //     event.preventDefault();
    //     const formData = new FormData();
    //     formData.append('file', file);

    //     console.log('formdata', formData)


    //     try{
    //         const res = await axios.post('/upload', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }

    //         });

    //     } catch(err){
    //         if(err.response.status === 500){
    //             console.log('There was a problem in the server');
    //         } else {
    //             console.log(err.response.data.msg)
    //         }
    //     }
    // }
    
    return(
    <div>
        <form action="http://localhost:5000/upload" encType="multipart/form-data" method="POST"> {/*to convert this in async function but I'm getting an error*/}
            <div className="input-group">
                <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile04"
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                    name = "file"
                />
            </div>

            <div className="form-floating mt-4">
                <textarea
                    className="form-control" 
                    placeholder="Leave a comment here" 
                    id="floatingTextarea2" 
                    style={{height: '100px'}}
                    name = "description"
                    >
                
                </textarea>
                <label htmlFor="floatingTextarea2">
                    Comments
                </label>
            </div>

            <input
                type="submit"
                value="Upload"
                className ="btn btn-primary btn-block mt-4"
            />
        </form>
    </div>
    );
}


export default FileUpload;