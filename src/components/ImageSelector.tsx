import { Button, FileUpload, Icon } from "@chakra-ui/react";
import { LuFileImage } from "react-icons/lu";
import ItemPreviewImage from "./ItemPreviewImage.tsx";



const ImageSelector = ({setter}: {setter: (value: File) => void}) => {

  const handleChange = (details: any) => {
    const file = details.acceptedFiles[0];
    if (!file) return;

     setter(file);
    
    // const reader = new FileReader();

    // reader.onload = (event) => {
    //     if (typeof event.target?.result === "string") {
    //         setter(event.target.result);
    //     }
    // };

    // reader.readAsDataURL(file);

  }

  
  return (

    <FileUpload.Root accept="image/*" onFileChange={handleChange} width='auto'>
      <FileUpload.HiddenInput width='auto'/>
      <FileUpload.Trigger asChild>
        <Button variant="outline" size="lg" width="240px">
          <Icon as={LuFileImage} /> Upload Images
        </Button>
      </FileUpload.Trigger>
      <ItemPreviewImage />
    </FileUpload.Root>
  )
}

export default ImageSelector
