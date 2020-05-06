/*
*    Copyright 2019 Misty Robotics, Inc.
*    Licensed under the Apache License, Version 2.0 (the "License");
*    you may not use this file except in compliance with the License.
*    You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
*    Unless required by applicable law or agreed to in writing, software
*    distributed under the License is distributed on an "AS IS" BASIS,
*    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or 
implied.
*    See the License for the specific language governing permissions and
*    limitations under the License.

*    **WARRANTY DISCLAIMER.**

*    * General. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MISTY ROBOTICS PROVIDES THIS SAMPLE SOFTWARE "AS-IS" AND DISCLAIMS ALL WARRANTIES AND CONDITIONS, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, AND NON-INFRINGEMENT OF THIRD-PARTY RIGHTS. MISTY ROBOTICS DOES NOT GUARANTEE ANY SPECIFIC RESULTS FROM THE USE OF THIS SAMPLE SOFTWARE. MISTY ROBOTICS MAKES NO WARRANTY THAT THIS SAMPLE SOFTWARE WILL BE UNINTERRUPTED, FREE OF VIRUSES OR OTHER HARMFUL CODE, TIMELY, SECURE, OR ERROR-FREE.
*    * Use at Your Own Risk. YOU USE THIS SAMPLE SOFTWARE AND THE PRODUCT AT YOUR OWN DISCRETION AND RISK. YOU WILL BE SOLELY RESPONSIBLE FOR (AND MISTY ROBOTICS DISCLAIMS) ANY AND ALL LOSS, LIABILITY, OR DAMAGES, INCLUDING TO ANY HOME, PERSONAL ITEMS, PRODUCT, OTHER PERIPHERALS CONNECTED TO THE PRODUCT, COMPUTER, AND MOBILE DEVICE, RESULTING FROM YOUR USE OF THIS SAMPLE SOFTWARE OR PRODUCT.

*    Please refer to the Misty Robotics End User License Agreement for further information and full details: https://www.mistyrobotics.com/legal/end-user-license-agreement/

*/

misty.Debug("starting skill helloworld_facedetection");

// Register for face detection event
misty.RegisterEvent("FaceRecognition", "FaceRecognition", 250);
// Timer event cancels the skill
// if no face is detected after 15 seconds
misty.RegisterTimerEvent("FaceRecognitionTimeout", 15000);

misty.StartFaceDetection();

// FaceDetection event callback
function _FaceRecognition() {
    misty.Debug("Face detected!");
    // Play an audio clip
    misty.PlayAudio("s_Joy3.wav");
    // Change LED to white
    misty.ChangeLED(255, 255, 255);
    // Stop face detection
    misty.StopFaceDetection();
};

// FaceDetectionTimeout callback
function _FaceRecognitionTimeout() {
    misty.Debug("face detection timeout called, it's taking too long...");

    // Change LED to black
    misty.ChangeLED(0, 0, 0);
    misty.StopFaceDetection();
};