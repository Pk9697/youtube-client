import Container from '@/features/authentication/components/Container'
import Form from '@/features/authentication/components/Form'

function Register() {
  return (
    <Container>
      <Form>
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
                <Form.Input id="fullName" placeholder="Max Robinson" required />
              </Form.InputContainer>
              <Form.InputContainer>
                <Form.Label htmlFor="userName">Username</Form.Label>
                <Form.Input id="userName" placeholder="robin123" required />
              </Form.InputContainer>
            </Form.GridGroup>
            <Form.InputContainer>
              <Form.Label htmlFor="avatar">Avatar</Form.Label>
              <Form.Input id="avatar" type="file" required />
            </Form.InputContainer>
            <Form.InputContainer>
              <Form.Label htmlFor="coverImage">Cover Image</Form.Label>
              <Form.Input id="coverImage" type="file" />
            </Form.InputContainer>
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
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Input id="password" type="password" required />
            </Form.InputContainer>
            <Form.Button type="submit">Register</Form.Button>
            <Form.Button variant="outline">Register with Google</Form.Button>
          </Form.GridGroup>
          <Form.Text>
            Already have an account? <Form.Link>Login</Form.Link>
          </Form.Text>
        </Form.Content>
      </Form>
    </Container>
  )
}

export default Register
