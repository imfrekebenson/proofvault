const certificateInput = document.getElementById("certificate");
const fileName = document.getElementById("fileName");
const hashOutput = document.getElementById("hashOutput");
const generateButton = document.getElementById("generateHash");
const saveButton = document.getElementById("saveMonad");

let selectedFile = null;

certificateInput.addEventListener("change", () => {

    selectedFile = certificateInput.files[0];

        if (!selectedFile) {
                fileName.textContent = "No certificate selected.";
                        hashOutput.textContent = "Upload a certificate first.";
                                saveButton.disabled = true;
                                        return;
                                            }

                                                fileName.textContent = selectedFile.name;
                                                    hashOutput.textContent = "Ready to generate fingerprint.";
                                                        saveButton.disabled = true;

                                                        });

                                                        generateButton.addEventListener("click", async () => {

                                                            if (!selectedFile) {
                                                                    alert("Please upload a certificate first.");
                                                                            return;
                                                                                }

                                                                                    hashOutput.textContent = "Generating fingerprint...";

                                                                                        const buffer = await selectedFile.arrayBuffer();

                                                                                            const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);

                                                                                                const hashArray = Array.from(new Uint8Array(hashBuffer));

                                                                                                    const hash = hashArray
                                                                                                            .map(byte => byte.toString(16).padStart(2, "0"))
                                                                                                                    .join("");

                                                                                                                        hashOutput.textContent = hash;

                                                                                                                            saveButton.disabled = false;

                                                                                                                            });

                                                                                                                            saveButton.addEventListener("click", () => {

                                                                                                                                alert("Blockchain integration coming next!");

                                                                                                                                });