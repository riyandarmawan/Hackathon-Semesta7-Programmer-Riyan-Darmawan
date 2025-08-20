import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Form, Head } from "@inertiajs/react";

export default function Index({ title }: { title: string }) {
    return (
        <>
            <Head title={title} />

            <div className="grid place-items-center w-full h-dvh">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            {title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form className="grid grid-cols-2 gap-4 max-w-2xl">
                            <div className="grid grid-cols-4">
                                <Label>Name</Label>
                                <Input type="text" name="name" placeholder="Enter your name" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4">
                                <Label>Email</Label>
                                <Input type="email" name="email" placeholder="Type your email" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4">
                                <Label>Category</Label>
                                <div className="col-span-3">
                                    <Select name="category">
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Choose a category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="plumbing">Plumbing</SelectItem>
                                            <SelectItem value="electricity">Electricity</SelectItem>
                                            <SelectItem value="cleaning">Cleaning</SelectItem>
                                            <SelectItem value="security">Security</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="grid grid-cols-4">
                                <Label>Location</Label>
                                <Input type="text" name="location" placeholder="Enter your unit location" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4">
                                <Label>Photo</Label>
                                <Input name="photo" placeholder="Add supporting photo" type="file" accept="image/*" capture="environment" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4">
                                <Label>Selfie</Label>
                                <Input name="selfie" placeholder="Add a selfie photo" type="file" accept="image/*" capture="user" className="col-span-3" />
                            </div>
                            <div className="flex flex-wrap gap-4 col-span-2">
                                <Label>Description</Label>
                                <Textarea name="description" placeholder="Explain your complaint" className="min-h-24 resize-none field-sizing-content"></Textarea>
                            </div>
                            <Button type="submit" className="col-span-2">Create</Button>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
