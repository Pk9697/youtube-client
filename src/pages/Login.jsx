import { Navigate } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'
import { ROUTES } from '@/data/constants'
import { Container, Form, useLogin } from '@/features/authentication'

function Login() {
  const {
    email,
    password,
    inProgress,
    isLoggedIn,
    handleChange,
    handleSubmit,
  } = useLogin()

  if (isLoggedIn) {
    return <Navigate to={ROUTES.HOME} />
  }

  return (
    <Container>
      {inProgress ? (
        <ThreeDots
          visible
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Header>
            <Form.Title>Login</Form.Title>
            <Form.Description>
              Enter your email below to login to your account
            </Form.Description>
          </Form.Header>
          <Form.Content>
            <Form.GridGroup>
              <Form.InputContainer>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Input
                  value={email}
                  onChange={handleChange}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Form.InputContainer>
              <Form.InputContainer>
                <Form.FlexRow className="justify-between">
                  <Form.Label htmlFor="password">Password</Form.Label>
                  <Form.Link>Forgot your password?</Form.Link>
                </Form.FlexRow>
                <Form.Input
                  value={password}
                  onChange={handleChange}
                  name="password"
                  id="password"
                  type="password"
                  required
                />
              </Form.InputContainer>
              <Form.Button disabled={inProgress} type="submit">
                Login
              </Form.Button>
              <Form.Button variant="outline">Login with Google</Form.Button>
            </Form.GridGroup>
            <Form.Text>
              Don&apos;t have an account? <Form.Link>Register</Form.Link>
            </Form.Text>
          </Form.Content>
        </Form>
      )}
    </Container>
  )
}

export default Login
