import Container from '@/features/authentication/components/Container'
import Form from '@/features/authentication/components/Form'

function Login() {
  return (
    <Container>
      <Form>
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
              <Form.Input id="password" type="password" />
            </Form.InputContainer>
            <Form.Button type="submit">Login</Form.Button>
            <Form.Button variant="outline">Login with Google</Form.Button>
          </Form.GridGroup>
          <Form.Text>
            Don&apos;t have an account? <Form.Link>Register</Form.Link>
          </Form.Text>
        </Form.Content>
      </Form>
    </Container>
  )
}

export default Login
