const certificateInput = document.getElementById("certificate");
const fileName = document.getElementById("fileName");
const hashOutput = document.getElementById("hashOutput");

certificateInput.addEventListener("change", async () => {

    const file = certificateInput.files[0];

        if (!file) {
                return;
                    }

                        fileName.textContent = file.name;

                            hashOutput.textContent = "Generating fingerprint...";

                                const buffer = await file.arrayBuffer();

                                    const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);

                                        const hashArray = Array.from(new Uint8Array(hashBuffer));

                                            const hash = hashArray
                                                    .map(byte => byte.toString(16).padStart(2, "0"))
                                                            .join("");

                                                                hashOutput.textContent = hash;

                                                                });