import React from 'react';
import { Image, KeyboardAvoidingView, Platform, View, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { Container, Title, BackToSignInButton, BackToSignInButtonText } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

const SignUp: React.FC = () => {

    const navigation = useNavigation();
    return(
        <>
            <KeyboardAvoidingView 
                style={{flex: 1}}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled    
            >
                <ScrollView 
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{flex: 1}}    
                >
                    <Container>
                        <Image source={logoImg} />
                        
                        <View>
                            <Title>Crie sua conta</Title>
                        </View>

                        <Input name='name' icon='user' placeholder='Nome'/>
                        <Input name='email' icon='mail' placeholder='E-mail'/>
                        <Input name='password' icon='lock' placeholder='Senha'/>

                        <Button onPress={() => {console.log('deu')}}>Criar Conta</Button>
                    </Container>
                </ScrollView>        
            </ KeyboardAvoidingView>
            <BackToSignInButton onPress={() => navigation.goBack()}>
                <Icon name='log-in' size={20} color='#FF9000' />
                <BackToSignInButtonText>
                    Voltar para login
                </BackToSignInButtonText>
            </BackToSignInButton>
        </>
    );
};

export default SignUp;
