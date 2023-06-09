import useRegisterPatient from "@/hooks/useRegisterPatient";
import RegistrationForm from "@/components/Forms/RegistrationForm";
import { LoadingOverlay, Text, Loader, Center } from "@mantine/core";
import messages from "@/utils/messages";
import BlurLoader from "../Utils/BlurLoader";

export default function RegisterPatient() {
  const { status, handleOnSumbit } = useRegisterPatient();

  return (
    <>
      {/* <LoadingOverlay
        visible={status}
        overlayBlur={4}
        loader={
          <>
            <Center>
              <Loader />
            </Center>
            <Text>{messages[status]}</Text>
          </>
        }
      /> */}
      <BlurLoader visible={status} status={status} />
      <RegistrationForm
        user="patient"
        initialValues={{}}
        handleOnSubmit={handleOnSumbit}
        submitIsDisabled={status}
      />
    </>
  );
}
