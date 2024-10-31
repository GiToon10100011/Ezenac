import { useForm } from "react-hook-form";
import styled from "styled-components";

interface IUserData {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  cfPassword: string;
  extraError?: string;
}

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TodoList = () => {
  // const [todo, setTodo] = useState("");
  // const [todoError, setTodoError] = useState("");
  // const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (todo === "") return setTodoError("값을 입력해주세요.");
  //   if (todo.length < 10) return setTodoError("너무 짧습니다.");
  // };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<IUserData>({
    defaultValues: {
      email: "@naver.com",
    },
  });

  const onValid = (data: IUserData) => {
    if (data.password !== data.cfPassword)
      setError(
        "cfPassword",
        { message: "비밀번호가 일치하지 않습니다." },
        { shouldFocus: true }
      );
    setValue("userName", "done");
    // setError("extraError", { message: "KIN" });
  };

  return (
    <>
      <Container>
        {/* <form onSubmit={handleOnSubmit}>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTodoError("");
              setTodo(e.target.value);
            }}
            type="text"
            placeholder="Todo"
            value={todo}
          />
          <input type="submit" value="Add" />
        </form>
        {todoError !== "" ? todoError : null} */}

        <Form onSubmit={handleSubmit(onValid)}>
          <input
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Za-z0-9]+@naver.com/g,
                message: "Only mails from Naver is allowed",
              },
            })}
            type="text"
            placeholder="Email"
          />
          {/* 유니온타입이므로 이 형식만 올거라고 단언하기 */}
          <span>{errors.email?.message as string}</span>
          <input
            {...register("firstName", {
              required: "Please write your first name.",
              validate: (value) =>
                value.includes("test") ? "Please put your real name" : true,
            })}
            type="text"
            placeholder="First Name"
          />
          <span>{errors.firstName?.message as string}</span>
          <input
            {...register("lastName", { required: true })}
            type="text"
            placeholder="Last Name"
          />
          <span>{errors.lastName?.message as string}</span>
          <input
            {...register("userName", {
              required: true,
            })}
            type="text"
            placeholder="User Name"
          />
          <span>{errors.userName?.message as string}</span>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 5,
                message: "Your password is too short",
              },
            })}
            type="text"
            placeholder="Password"
          />
          <span>{errors.password?.message as string}</span>
          <input
            {...register("cfPassword", { required: true })}
            type="text"
            placeholder="Confirm Password"
          />
          <span>{errors.cfPassword?.message as string}</span>
          <input type="submit" value="Add" />
          <span>{errors.extraError?.message as string}</span>
        </Form>
      </Container>
    </>
  );
};

export default TodoList;
