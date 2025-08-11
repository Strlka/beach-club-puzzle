import { Box, FileUpload, Float, useFileUploadContext } from '@chakra-ui/react'
import { LuX } from 'react-icons/lu';


const ItemPreviewImage = () => {

    const fileUpload = useFileUploadContext();
    const files = fileUpload.acceptedFiles;
    
    if (files.length === 0) return null;

    console.log(files[0]);
    
  return (
    <FileUpload.ItemGroup width="240px">
        <FileUpload.Item
          width="auto"
          boxSize='75%'
          padding="2"
          file={files[0]}
          key={files[0].name}
        >
          <FileUpload.ItemPreviewImage width='auto'/>
          <Float placement="top-end">
            <FileUpload.ItemDeleteTrigger boxSize="4" layerStyle="fill.solid" asChild>
              <Box borderRadius={2}>
                <LuX />
              </Box>
            </FileUpload.ItemDeleteTrigger>
          </Float>
        </FileUpload.Item>
    </FileUpload.ItemGroup>
  )
}

export default ItemPreviewImage
