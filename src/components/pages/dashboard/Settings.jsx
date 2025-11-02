import { FaGear } from "react-icons/fa6";
import PageHeader from "../../common/PageHeader";
import CustomForm from "../../common/CustomForm";
import Input from "../../common/Input";
import RoundBlueButton from "../../common/RoundBlueButton";
import Select from "../../common/Select";
import { Formik } from 'formik';
import * as Yup from 'yup';
import classes from "./CreateSubject.module.css";
import { useGetAiModelChoices,  useGetLanguageChoices,  useGetSettings, useSetSettings } from "../../../utils/hooks";
import create_settings from "../../../assets/create_course.png";

const initialValues = {
  temperature: 0.7,
  agentModel: '',
  language: ''
};

const validationSchema = Yup.object({
  temperature: Yup.number()
    .min(0, 'Must be at least 0')
    .max(1, 'Must be at most 1')
    .required('This field is required'),
  agentModel: Yup.string().required('This field is required'),
  language: Yup.string().required('This field is required'),
});

export default function Settings() {
  const { data: settings } = useGetSettings();
  const formValues = settings
  ? {
      temperature: settings.temperature ?? 0.7,
      agentModel: settings.ai_model ?? '',
      language: settings.translation_language ?? '',
    }
  : initialValues;
  const { handleSubmit } = useSetSettings();

  let {data:agentOptions} = useGetAiModelChoices()
  let {data:languageOptions} = useGetLanguageChoices()

  agentOptions = [{key:"", label:"Select agent"}, ...(agentOptions || [])]
  languageOptions = [{key:"", label:"Select Language"}, ...(languageOptions || [])]
 

  return (
    <>
      <PageHeader title="Settings" subtitle="Adjust your AI and translation preferences." />

      <div className={classes.mainLayout}>
        <Formik
          initialValues={formValues}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={handleSubmit}
        >
          <CustomForm className={classes.createForm} >
            <Input
              label="🌡️ Temperature"
              type="number"
              id="temperature"
              name="temperature"
              step="0.1"
              min="0"
              max="1"
              placeholder="0.7"
            />

            <Select
              id="agentModel"
              name="agentModel"
              label="🤖 Agent Model"
            >
              {agentOptions?.map(choice => (
                <option key={choice.key} value={choice.key}>{choice.label}</option>
              ))}
            </Select>

            <Select
              id="language"
              name="language"
              label="🌐 Translation Language"
            >
              {languageOptions?.map(choice => (
                <option key={choice.key} value={choice.key}>{choice.label}</option>
              ))}
            </Select>

            <RoundBlueButton type="submit">
              <FaGear /> Save Settings
            </RoundBlueButton>
          </CustomForm>
        </Formik>
        <img  className={classes.sideImage} src={create_settings} alt="Create Settings"/>
      </div>
    </>
  );
}
