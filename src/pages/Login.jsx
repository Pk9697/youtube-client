import { Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ROUTES } from '@/data/constants'
import { Container, Form, useLogin } from '@/features/authentication'
import useApp from '@/app/useApp'
import Loader from '@/components/Loader'

function Login() {
  const { isLoading: isLoadingLogin } = useApp('auth/login')
  const { email, password, handleChange, handleSubmit } = useLogin()
  const { isLoggedIn } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  if (isLoggedIn) {
    return <Navigate to={ROUTES.HOME} />
  }

  return (
    <Container>
      <Loader inProgress={isLoadingLogin}>
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
                  autoComplete="email"
                  placeholder="m@example.com"
                  required
                />
              </Form.InputContainer>
              <Form.InputContainer>
                <Form.FlexRow className="justify-between">
                  <Form.Label htmlFor="password">Password</Form.Label>
                  {/* <Form.Link>Forgot your password?</Form.Link> */}
                </Form.FlexRow>
                <Form.Input
                  value={password}
                  onChange={handleChange}
                  name="password"
                  id="password"
                  type="password"
                  autoComplete="password"
                  required
                />
              </Form.InputContainer>
              <Form.Button disabled={isLoadingLogin} type="submit">
                Login
              </Form.Button>
              {/* <Form.Button disabled={isLoadingLogin} variant="outline">
              Login with Google
            </Form.Button> */}
            </Form.GridGroup>
            <Form.Text>
              Don&apos;t have an account?{' '}
              <Form.Link onClick={() => navigate(ROUTES.REGISTER)}>
                Register
              </Form.Link>
            </Form.Text>
          </Form.Content>
        </Form>
      </Loader>
    </Container>
  )
}

export default Login
