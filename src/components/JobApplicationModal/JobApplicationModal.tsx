import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
export default function JobApplicationModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 focus:outline-none focus:ring-0 focus:border-transparent">
          Apply now
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Submit your application
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-8">
          <div>
            <Label>Full name</Label>
            <Input
              placeholder="Enter your fullname"
              className="focus:outline-none focus:ring-0 focus:border-transparent"
            />
          </div>
          <div>
            <Label>Email address</Label>
            <Input
              placeholder="Enter your email address"
              type="email"
              className="focus:outline-none focus:ring-0 focus:border-transparent"
            />
          </div>
          <div>
            <Label>Phone number</Label>
            <Input
              placeholder="Enter your phone number"
              type="tel"
              className="focus:outline-none focus:ring-0 focus:border-transparent"
            />
          </div>
          <div>
            <Label>Current or previous job title</Label>
            <Input
              placeholder="What's your current or previous job title?"
              className="focus:outline-none focus:ring-0 focus:border-transparent"
            />
          </div>

          <h3 className="text-lg font-semibold mt-4">LINKS</h3>
          <div>
            <Label>LinkedIn URL</Label>
            <Input
              placeholder="Link to your LinkedIn URL"
              className="focus:outline-none focus:ring-0 focus:border-transparent"
            />
          </div>
          <div>
            <Label>Portfolio URL</Label>
            <Input
              placeholder="Link to your portfolio URL"
              className="focus:outline-none focus:ring-0 focus:border-transparent"
            />
          </div>

          <div>
            <Label>Additional information</Label>
            <Textarea
              placeholder="Add a cover letter or anything else you want to share"
              className="focus:outline-none focus:ring-0 focus:border-transparent"
            />
            <p className="text-xs text-gray-500">Maximum 500 characters</p>
          </div>

          <div>
            <Label>Attach your resume</Label>
            <Input
              type="file"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-0 focus:border-transparent"
            />
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 text-lg focus:outline-none focus:ring-0 focus:border-transparent">
            Submit Application
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
