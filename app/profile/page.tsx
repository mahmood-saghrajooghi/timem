"use client";
import { useCallback, useState } from "react";
import {
  useForm,
  isNotEmpty,
  isEmail,
  isInRange,
  hasLength,
  matches,
} from "@mantine/form";

import { Button } from "components/Button";
import { Input } from "components/Input";
import { SpacedChildren } from "components/styled/SpacedChildren";
import { Switch } from "components/Switch";
import EditAlt from "icons/edit-alt";

import { useAppLoadingContext } from "context/loadingContext";
import { sleep } from "utils/sleep";

async function editProfile<T extends Record<string, string>>(values: T) {
  await sleep(5000);
}

const profile = () => {
  const [, setAppLoadingState] = useAppLoadingContext();
  // const [changePassword, setChangePassword] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(true);

  const form = useForm({
    initialValues: {
      username: "",
      email: "",
      // password: "",
      // confirmPassword: "",
    },

    validate: {
      username: isNotEmpty("Username required"),
      email: isEmail("Email invalid"),
      // password: hasLength({ min: 8 }, "Password required"),
      // confirmPassword: (value, values) =>
      //   value !== values.password ? "Passwords did not match" : null,
    },
  });

  const handleSave = useCallback(
    async (values: Parameters<Parameters<typeof form.onSubmit>[0]>[0]) => {
      setAppLoadingState(true);
      await editProfile(values);
      setAppLoadingState(false);
      setIsEditing(false);
    },
    []
  );

  return (
    <>
      {/* context */}
      <div className="p-2">
        <div className="bg-white border border-timem-gray-100 p-2 overflow-y-auto">
          <SpacedChildren
            spaceDirection="bottom"
            childSpace=".5rem"
            className={isEditing ? "hidden" : ""}
          >
            <div className="flex items-center">
              <div className="text-xs font-bold text-timem-gray-900">
                User profile
              </div>
              <Button
                size="xs"
                color="white-outline"
                className="ml-auto"
                onClick={() => setIsEditing(true)}
              >
                <EditAlt width={14} className="mr-1" />
                Edit
              </Button>
            </div>
            <div className="w-full border-b border-dashed border-timem-gray-100"></div>
            <SpacedChildren
              spaceDirection="bottom"
              childSpace=".5rem"
              className="text-timem-gray-400 text-xs font-bold"
            >
              <div>
                Username: <span className="text-timem-gray-900">Mem Fara</span>
              </div>
              <div>
                Email: <span className="text-timem-gray-900">Mem Fara</span>
              </div>
            </SpacedChildren>
          </SpacedChildren>
          <form
            className={isEditing ? "" : "hidden"}
            onSubmit={form.onSubmit(handleSave)}
          >
            <SpacedChildren
              spaceDirection="bottom"
              childSpace=".5rem"
              className="text-xs"
            >
              <div className="font-bold">Edit profile</div>
              <div className="flex text-timem-gray-900">
                <Input
                  size={1}
                  cSize="sm"
                  color="white-outline"
                  placeholder="Username"
                  className="flex-1"
                  {...form.getInputProps("username")}
                />
              </div>
              <div className="flex">
                <Input
                  size={1}
                  cSize="sm"
                  color="white-outline"
                  placeholder="Email"
                  className="flex-1"
                  {...form.getInputProps("email")}
                />
              </div>
              {/* <SpacedChildren
                spaceDirection="right"
                childSpace=".5rem"
                className="flex items-center text-timem-gray-900 font-bold"
              >
                <div>Change password</div>
                <Switch
                  checked={changePassword}
                  onChange={(e) => setChangePassword(e.currentTarget.checked)}
                />
                <div className="flex-1 border-b border-dashed border-timem-gray-100"></div>
              </SpacedChildren> */}
              {/* {changePassword && (
                <>
                  <div className="flex text-timem-gray-900">
                    <Input
                      size={1}
                      cSize="sm"
                      color="white-outline"
                      placeholder="Password"
                      className="flex-1"
                      {...form.getInputProps("password")}
                    />
                  </div>
                  <div className="flex">
                    <Input
                      size={1}
                      cSize="sm"
                      color="white-outline"
                      placeholder="Password Confirmation"
                      className="flex-1"
                      {...form.getInputProps("confirmPassword")}
                    />
                  </div>
                </>
              )} */}
              <SpacedChildren
                spaceDirection="right"
                childSpace=".5rem"
                className="flex"
              >
                <Button
                  color="white-outline"
                  size="sm"
                  className="ml-auto"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" color="gray" size="sm">
                  Submit
                </Button>
              </SpacedChildren>
            </SpacedChildren>
          </form>
        </div>
      </div>
    </>
  );
};

export default profile;
