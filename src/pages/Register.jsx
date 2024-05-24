import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { Container, Form } from '@/features/authentication'
import useRegister from '@/features/authentication/hooks/useRegister'
import { ROUTES } from '@/data/constants'
import useApp from '@/app/useApp'
import Loader from '@/components/Loader'

function Register() {
  const { isLoading: isLoadingRegister } = useApp('auth/register')

  const { fullName, email, userName, password, handleChange, handleSubmit } =
    useRegister()
  const { user, isLoggedIn } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  if (isLoggedIn) {
    return <Navigate to={ROUTES.HOME} />
  }

  // If after registeration user field exists then user is registered
  // so navigate user to login page
  if (user) {
    return <Navigate to={ROUTES.LOGIN} />
  }

  return (
    <Container>
      <Loader inProgress={isLoadingRegister}>
        <Form onSubmit={handleSubmit}>
          <Form.Header>
            <Form.Title>Register</Form.Title>
            <Form.Description>
              Enter your information to create an account
            </Form.Description>
          </Form.Header>
          <Form.Content>
            <Form.GridGroup>
              <Form.GridGroup className="grid-cols-2">
                <Form.InputContainer>
                  <Form.Label htmlFor="fullName">Full name</Form.Label>
                  <Form.Input
                    value={fullName}
                    onChange={handleChange}
                    name="fullName"
                    id="fullName"
                    autoComplete="fullName"
                    placeholder="Max Robinson"
                    required
                  />
                </Form.InputContainer>
                <Form.InputContainer>
                  <Form.Label htmlFor="userName">Username</Form.Label>
                  <Form.Input
                    value={userName}
                    onChange={handleChange}
                    name="userName"
                    id="userName"
                    autoComplete="username"
                    placeholder="robin123"
                    required
                  />
                </Form.InputContainer>
              </Form.GridGroup>
              <Form.InputContainer>
                <Form.Label htmlFor="avatar">Avatar</Form.Label>
                <Form.Input
                  onChange={handleChange}
                  name="avatar"
                  id="avatar"
                  type="file"
                  required
                  className="file:text-primary"
                  accept="image/*"
                />
              </Form.InputContainer>
              <Form.InputContainer>
                <Form.Label htmlFor="coverImage">Cover Image</Form.Label>
                <Form.Input
                  onChange={handleChange}
                  name="coverImage"
                  id="coverImage"
                  type="file"
                  className="file:text-primary"
                  accept="image/*"
                />
              </Form.InputContainer>
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
                <Form.Label htmlFor="password">Password</Form.Label>
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
              <Form.Button disabled={isLoadingRegister} type="submit">
                Register
              </Form.Button>
              {/* <Form.Button disabled={isLoadingRegister} variant="outline">
              Register with Google
            </Form.Button> */}
            </Form.GridGroup>
            <Form.Text>
              Already have an account?{' '}
              <Form.Link onClick={() => navigate(ROUTES.LOGIN)}>
                Login
              </Form.Link>
            </Form.Text>
          </Form.Content>
        </Form>
      </Loader>
    </Container>
  )
}

export default Register
