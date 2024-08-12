"use client";
import styles from "./editor.module.css";
import {
  Bird,
  Book,
  Bot,
  Code2,
  CornerDownLeft,
  LifeBuoy,
  Mic,
  Paperclip,
  Rabbit,
  Settings,
  Settings2,
  Share,
  SquareTerminal,
  SquareUser,
  Triangle,
  Turtle,
  Code,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import apiResource from "@/services/api-resource";
import ENDPOINTS from "@/services/api-endpoints";
import { handleAsync } from "@/services/service-helpers";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import useFeatures from "@/hooks/use-features";
import { useDispatch } from "react-redux";
import { addFeatures } from "@/redux/feature/featureReducer";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const dispatch = useDispatch();

  const [featuresList, setFeaturesList] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [features, toggleFeature] = useFeatures();
  const router = useRouter();

  // const handleFeature = (feature) => toggleFeature(feature);

  const handleFeature = (feature) => {
    if (features.length < 6 || features.some((f) => f.id === feature.id)) {
      console.log("Toggled feature:", features);
      toggleFeature(feature);
    } else {
      alert("You can only select up to 6 features.");
    }
  };
  // const handleGetSelectedFeaturesCode = async (payload) => {
  //   setLoading(true);

  //   const [data, error] = await handleAsync(() =>
  //     apiResource.post(ENDPOINTS.getSelectedFeaturesCode, payload)
  //   ).finally(() => {
  //     setLoading(false);
  //     resetPrompt();
  //   });
  //   if (error && !data) {
  //     console.error(error);
  //     return;
  //   }

  //   dispatch(addFeatures(data));
  //   router.push("/editor");
  // };

  const handleGetSelectedFeaturesCode = async (payload) => {
    setLoading(true);

    const [data, error] = await handleAsync(() =>
      apiResource.post(ENDPOINTS.getSelectedFeaturesCode, payload)
    );

    setLoading(false);
    resetPrompt();

    if (error && !data) {
      console.error(error);
      return;
    }
    console.log(data);
    dispatch(addFeatures(data));
  };

  const resetPrompt = () => {
    setPrompt("");
  };

  const getFeaturesRequest = async (payload) => {
    setLoading(true);

    const [data, error] = await handleAsync(() =>
      apiResource.post(ENDPOINTS.getFeaturesList, payload)
    ).finally(() => {
      setLoading(false);
      resetPrompt();
    });

    if (error && !data) {
      console.error(error);
      return;
    }

    setFeaturesList(data);
  };

  const getFeaturesFromPrompt = async (prompt = "") => {
    if (typeof prompt !== "string") return console.warn("Invalid params");

    await getFeaturesRequest({ prompt });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div
            className={`${styles.loader} ease-linear rounded-full border-4 border-t-4 border-primary h-12 w-12 mb-4`}
          ></div>
          <p className="text-lg font-medium text-muted-foreground">
            generating...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid h-screen w-full pl-[53px]">
      <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
        <div className="border-b p-2">
          <Button variant="outline" size="icon" aria-label="Home">
            <Triangle className="size-5 fill-foreground" />
          </Button>
        </div>
        <nav className="grid gap-1 p-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg bg-muted"
            aria-label="Playground"
          >
            <SquareTerminal className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg"
            aria-label="Models"
          >
            <Bot className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg"
            aria-label="API"
          >
            <Code2 className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg"
            aria-label="Documentation"
          >
            <Book className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg"
            aria-label="Settings"
          >
            <Settings2 className="size-5" />
          </Button>
        </nav>
        <nav className="mt-auto grid gap-1 p-2">
          <Button
            variant="ghost"
            size="icon"
            className="mt-auto rounded-lg"
            aria-label="Help"
          >
            <LifeBuoy className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="mt-auto rounded-lg"
            aria-label="Account"
          >
            <SquareUser className="size-5" />
          </Button>
        </nav>
      </aside>
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
          <h1 className="text-xl font-semibold">Playground</h1>

          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Settings className="size-4" />
                <span className="sr-only">Settings</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[80vh]">
              <DrawerHeader>
                <DrawerTitle>Configuration</DrawerTitle>
                <DrawerDescription>
                  Configure the settings for the model and messages.
                </DrawerDescription>
              </DrawerHeader>
              {/* <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Settings
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="model">Model</Label>
                    <Select>
                      <SelectTrigger
                        id="model"
                        className="items-start [&_[data-description]]:hidden"
                      >
                        <SelectValue placeholder="Select a model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="genesis">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <Rabbit className="size-5" />
                            <div className="grid gap-0.5">
                              <p>
                                Neural{" "}
                                <span className="font-medium text-foreground">
                                  Genesis
                                </span>
                              </p>
                              <p className="text-xs" data-description>
                                Our fastest model for general use cases.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="explorer">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <Bird className="size-5" />
                            <div className="grid gap-0.5">
                              <p>
                                Neural{" "}
                                <span className="font-medium text-foreground">
                                  Explorer
                                </span>
                              </p>
                              <p className="text-xs" data-description>
                                Performance and speed for efficiency.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="quantum">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <Turtle className="size-5" />
                            <div className="grid gap-0.5">
                              <p>
                                Neural{" "}
                                <span className="font-medium text-foreground">
                                  Quantum
                                </span>
                              </p>
                              <p className="text-xs" data-description>
                                The most powerful model for complex
                                computations.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="temperature">Temperature</Label>
                    <Input id="temperature" type="number" placeholder="0.4" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="top-p">Top P</Label>
                    <Input id="top-p" type="number" placeholder="0.7" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="top-k">Top K</Label>
                    <Input id="top-k" type="number" placeholder="0.0" />
                  </div>
                </fieldset>
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Messages
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="role">Role</Label>
                    <Select defaultValue="system">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="system">System</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="assistant">Assistant</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="content">Content</Label>
                    <Textarea id="content" placeholder="You are a..." />
                  </div>
                </fieldset>
              </form> */}
            </DrawerContent>
          </Drawer>
            {/* <Button variant="outline" className="ml-auto gap-1.5 text-sm">
              <Link href="/login">Logout</Link>
            </Button> */}
            <Button
              variant="outline"
              size="sm"
              className="ml-auto gap-1.5 text-sm"
            >
              <Share className="size-3.5" />
              <a href="/editor">Editor</a>
            </Button>
        </header>
        <main className="grid flex-1 gap-4 overflow-auto p-4 ">
          {/* <div
            className="relative hidden flex-col items-start gap-8 md:flex"
            x-chunk="dashboard-03-chunk-0"
          > */}
          {/* <form className="grid w-full items-start gap-6">
              <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Settings
                </legend>
                <div className="grid gap-3">
                  <Label htmlFor="model">Model</Label>
                  <Select>
                    <SelectTrigger
                      id="model"
                      className="items-start [&_[data-description]]:hidden"
                    >
                      <SelectValue placeholder="Select a model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="genesis">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Rabbit className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Neural{" "}
                              <span className="font-medium text-foreground">
                                Genesis
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              Our fastest model for general use cases.
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="explorer">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Bird className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Neural{" "}
                              <span className="font-medium text-foreground">
                                Explorer
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              Performance and speed for efficiency.
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="quantum">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Turtle className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Neural{" "}
                              <span className="font-medium text-foreground">
                                Quantum
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              The most powerful model for complex computations.
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="temperature">Temperature</Label>
                  <Input id="temperature" type="number" placeholder="0.4" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="top-p">Top P</Label>
                    <Input id="top-p" type="number" placeholder="0.7" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="top-k">Top K</Label>
                    <Input id="top-k" type="number" placeholder="0.0" />
                  </div>
                </div>
              </fieldset>
              <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Messages
                </legend>
                <div className="grid gap-3">
                  <Label htmlFor="role">Role</Label>
                  <Select defaultValue="system">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="system">System</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="assistant">Assistant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    placeholder="You are a..."
                    className="min-h-[9.5rem]"
                  />
                </div>
              </fieldset>
            </form> */}
          {/* </div> */}
          <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
            <Badge variant="outline" className="absolute right-3 top-3">
              Output
            </Badge>
            {!!featuresList.length ? (
              <p className="text-lg mb-5">
                Select Features from the list (You can only secondary 6)
              </p>
            ) : (
              <p className="text-xl mb-5">
                Send a prompt to create a list of features
              </p>
            )}
            {!!featuresList.length && (
              <div className="flex align-middle gap-6">
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const featureBatches = [];

                    if (features.length > 4) {
                      featureBatches.push(features.slice(0, 2)); // First 2 features
                      featureBatches.push(features.slice(2, 4)); // Features 3 and 4
                      featureBatches.push(features.slice(4)); // Features 5 and 6
                    } else if (features.length > 2) {
                      featureBatches.push(features.slice(0, 2)); // First 2 features
                      featureBatches.push(features.slice(2)); // Features 3 and 4
                    } else {
                      featureBatches.push(features); // All features if 2 or fewer
                    }

                    for (const batch of featureBatches) {
                      await handleGetSelectedFeaturesCode({
                        selectedFeatureList: batch,
                      });
                    }

                    router.push("/editor"); // Navigate after all requests are done
                  }}
                  // onSubmit={(e) => {
                  //   e.preventDefault();
                  //   handleGetSelectedFeaturesCode({
                  //     selectedFeatureList: features,
                  //   });
                  // }}
                  className="grid grid-cols-3 gap-4"
                >
                  {featuresList.map(({ id, label }) => (
                    <div className="flex align-middle" key={id}>
                      <Checkbox
                        onClick={() => handleFeature({ id, label })}
                        className={"mr-2"}
                        id={id}
                        disabled={
                          features.length >= 6 &&
                          !features.some((f) => f.id === id)
                        }
                      />
                      <Label htmlFor={id}>{label}</Label>
                    </div>
                  ))}

                  <div>
                    <Button
                      disabled={loading || featuresList.length == 0}
                      type="submit"
                      size="sm"
                      className="ml-auto gap-1.5"
                    >
                      Get Code
                      <CornerDownLeft className="size-3.5" />
                    </Button>
                  </div>
                </form>
              </div>
            )}
            <div className="flex-1" />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                getFeaturesFromPrompt(prompt);
              }}
              className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
              x-chunk="dashboard-03-chunk-1"
            >
              <Label htmlFor="message" className="sr-only">
                Message
              </Label>
              <Textarea
                disabled={loading || !!featuresList.length}
                onChange={(e) => setPrompt(e.target.value)}
                value={prompt}
                id="message"
                placeholder="Type your message here..."
                className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
              />
              <div className="flex items-center p-3 pt-0">
                <Button disabled={true} variant="ghost" size="icon">
                  <Paperclip className="size-4" />
                  <span className="sr-only">Attach file</span>
                </Button>
                <Button disabled={true} variant="ghost" size="icon">
                  <Mic className="size-4" />
                  <span className="sr-only">Use Microphone</span>
                </Button>
                <Button
                  disabled={loading || !!featuresList.length}
                  type="submit"
                  size="sm"
                  className="ml-auto gap-1.5"
                >
                  Send Message
                  <Code className="size-3.5" />
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
