import React, { useState } from "react";
import { Button, Form, Card, Container, Row, Col, Alert, Spinner } from "react-bootstrap";

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState<'success' | 'danger'>('success');
    const [alertMessage, setAlertMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
        const response = await fetch('http://localhost:25060/api/usuarios/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha: password }),
        });

        const data = await response.json();

        if (response.ok) {
            // Login realizado
            setAlertType('success');
            setAlertMessage('Login realizado com sucesso!');
            
            // Store token in localStorage for future requests********
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('userType', data.data.tipoUsuario);
            
            
        } else {

            setAlertType('danger');
            setAlertMessage(data.message || 'Email ou senha incorretos!');
        }
    } catch (error) {
        setAlertType('danger');
        setAlertMessage('Erro de conexão. Tente novamente.');
    }

    setShowAlert(true);
    setLoading(false);
};

    return (



        <div className="flex-col mb-10">
            <div>
                <h2 className="text-center mb-4 fw-bold fs-1">Bem-vindo!</h2>
                <h3 className="text-center mb-4 text-secundary fs-5">Entre na sua conta Cuidar TEA</h3>
            </div>
            <Container className="d-flex align-items-center justify-content-center bg-white mt-0">
                <Row className="w-100">
                    <Col xs={12} sm={8} md={6} lg={4} className="mx-auto">
                        <Card className="shadow-lg border-0">
                            <Card.Body className="">
                                {showAlert && (
                                    <Alert
                                        variant={alertType}
                                        onClose={() => setShowAlert(false)}
                                        dismissible
                                        className="mb-4 text-center"
                                    >
                                        {alertMessage}
                                    </Alert>
                                )}

                                <Form onSubmit={handleSubmit} className="w-100">
                                    <Form.Group className="mb-4">
                                        <Form.Label className="fw-semibold d-block text-start">Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Digite seu email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Label className="fw-semibold d-block text-start">Senha</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Digite sua senha"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <Button
                                        variant="danger"
                                        type="submit"
                                        className="w-100"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <Spinner animation="border" size="sm" />
                                                <span className="ms-2">Entrando...</span>
                                            </>
                                        ) : 'Entrar'}
                                    </Button>
                                </Form>
                            </Card.Body>
                            <div className="d-flex justify-content-center">
                            <a href="/Register" className="mt-2 mb-4 fs-6">Cadastre-se</a>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Login;
