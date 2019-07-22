import React, {useEffect, useState} from 'react';
import {useQuery} from "react-apollo-hooks";
import {IonAvatar, IonItem, IonLabel, IonList, IonListHeader} from "@ionic/react";
import {userQuery} from "../queries/user.query";

interface User {
    user_id: number;
    username: string;
    password: string;
}

interface UserResponse {
    t_user: User[];
}

const UsersComp = () => {
    const { data, error, loading } = useQuery<UserResponse>(userQuery);
    if(loading) {
        return (<h1>Loading....</h1>);
    }

    if (error) {
        return <div>Error! {error.message}</div>;
    }

    return (
        <IonList>
            <IonListHeader>Users</IonListHeader>
            {
                data.t_user.map((u, i) => (
                    <IonItem key={i}>
                        <IonAvatar slot={"start"}>
                            <img src={"./avatar-finn.png"}/>
                        </IonAvatar>
                        <IonLabel>
                            <h2>{u.username}</h2>
                            <h3>{u.password}</h3>
                            <p>Listen, I've had a pretty messed up day...</p>
                        </IonLabel>
                    </IonItem>
                ))
            }
        </IonList>
    );
};

export {UsersComp};