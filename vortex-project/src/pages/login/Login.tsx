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

        setTimeout(() => {
            if (email === 'teste@email.com' && password === '123456') {
                setAlertType('success');
                setAlertMessage('Login realizado com sucesso!');
            } else {
                setAlertType('danger');
                setAlertMessage('Email ou senha incorretos!');
            }
            setShowAlert(true);
            setLoading(false);
        }, 1500);
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
                            <a href="" className="mt-3 fs-6">Cadastre-se</a>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Login;
