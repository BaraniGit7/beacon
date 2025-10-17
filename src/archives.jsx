//for document
<input type="file" style={{ display: "none" }} id={`file-upload-${index}`} onChange={(e) => handleChangeFile(e, index)} />
                      <label htmlFor={`file-upload-${index}`}>
                        <IconButton color={files[index] ? "success" : "primary"} component="span"><AttachFile /></IconButton>
                      </label>
                      {files[index] && (<span style={{ marginLeft: "8px" }}>{files[index].name}</span>)}