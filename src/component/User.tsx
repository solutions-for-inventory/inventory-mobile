import React, {useEffect, useState} from 'react';
import { gql } from "apollo-boost";
import {useQuery} from "react-apollo-hooks";
import {IonAvatar, IonItem, IonLabel, IonList, IonListHeader} from "@ionic/react";


const USER_LIST_QUERY = gql`
query getUsers {
  t_user {
    password
    user_id
    username
    t_user_roles {
      user_id
      user_role_id
    }
  }
}
`;

interface User {
    user_id: number;
    username: string;
    password: string;
}

interface UserRequest {
    t_user: User[];
}

interface Response<T> {
    loading: boolean;
    error: boolean|undefined;
    data: T;
}

const UsersComp = ({}) => {
    const { data, error, loading } = useQuery<UserRequest>(USER_LIST_QUERY);
    if(loading) {
        return (<h1>Loading....</h1>);
    }

    if (error) {
        return <div>Error! {error.message}</div>;
    }



    // return (
    //     <ul>
    //         {
    //             data.t_user.map((u, i) => (<li key={i}>{u.username}</li>))
    //         }
    //     </ul>
    // );


    return (
        <IonList>
            <IonListHeader>
                Recent Conversations
            </IonListHeader>

            <IonItem>
                <IonAvatar slot={"start"}>
                    <img src="./avatar-finn.png"/>
                </IonAvatar>
                <IonLabel>
                    <h2>Finn</h2>
                    <h3>I'm a big deal</h3>
                    <p>Listen, I've had a pretty messed up day...</p>
                </IonLabel>
            </IonItem>

            <IonItem>
                <IonAvatar slot={"start"}>
                    <img src={"./avatar-han.png"}/>
                </IonAvatar>
                <IonLabel>
                    <h2>Han</h2>
                    <h3>Look, kid...</h3>
                    <p>I've got enough on my plate as it is, and I...</p>
                </IonLabel>
            </IonItem>

            <IonItem>
                <IonAvatar slot={"start"}>
                    <img src={"./avatar-rey.png"}/>
                </IonAvatar>
                <IonLabel>
                    <h2>Rey</h2>
                    <h3>I can handle myself</h3>
                    <p>You will remove these restraints and leave...</p>
                </IonLabel>
            </IonItem>

            <IonItem>
                <IonAvatar slot={"start"}>
                    <img src={"./avatar-luke.png"}/>
                </IonAvatar>
                <IonLabel>
                    <h2>Luke</h2>
                    <h3>Your thoughts betray you</h3>
                    <p>I feel the good in you, the conflict...</p>
                </IonLabel>
            </IonItem>
        </IonList>
    );
};

export {UsersComp};