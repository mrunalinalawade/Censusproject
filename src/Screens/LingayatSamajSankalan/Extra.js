  {/* <TouchableOpacity onPress={() => setShowInputField(!showInputField)} style={{ alignItems: 'flex-end' }}><Text style={styles.firstname1}>Add Details</Text></TouchableOpacity>
                {showInputField && (
                    <>

                        <Text style={styles.firstname}>
                            Relation
                            <Text style={styles.starStyle}>*</Text>
                        </Text>

                        <Inputfield
                            placeholder={'Enter Relation'}
                            MaxLength={256}
                            value={Relation1}


                            onBlur={() => {
                                if (Relation1 != '' || Relation1 != undefined) {
                                    setShowError(prevState => ({
                                        ...prevState,
                                        RelationError1: true,
                                    }));
                                }
                            }}
                            onChangeText={(text) => {
                                if (Relation1 != '' || Relation1 != undefined) {
                                    setRelation1(text);
                                    setRelationError1(ValidateFullname(text));
                                }
                            }}
                            ShowError={ShowError.RelationError1}
                            Error={RelationError1}
                        />
                        <Text style={styles.firstname}>
                            Full Name
                            <Text style={styles.starStyle}>*</Text>
                        </Text>
                        <Inputfield
                            placeholder={'Enter First Name'}
                            MaxLength={256}
                            value={FName}


                            onBlur={() => {
                                if (FName != '' || FName != undefined) {
                                    setShowError(prevState => ({
                                        ...prevState,
                                        FNameError: true,
                                    }));
                                }
                            }}
                            onChangeText={(text) => {
                                if (FName != '' || FName != undefined) {
                                    setFName(text);
                                    setFNameError(ValidateFullname(text));
                                }
                            }}
                            ShowError={ShowError.FNameError}
                            Error={FNameError}
                        />
                        <Text style={styles.firstname}>
                            Name Of the firm or employer
                            <Text style={styles.starStyle}>*</Text>
                        </Text>
                        <Inputfield
                            placeholder={'Enter Name Of the firm or employer'}
                            MaxLength={256}
                            value={employer}


                            onBlur={() => {
                                if (employer != '' || employer != undefined) {
                                    setShowError((prevState) => ({
                                        ...prevState,
                                        employerError: true,
                                    }));
                                }
                            }}
                            onChangeText={(text) => {
                                if (employer != '' || employer != undefined) {
                                    setemployer(text);
                                    setemployerError(ValidateFirmemployername(text));
                                }
                            }}
                            ShowError={ShowError.employerError}
                            Error={employerError}
                        />


                        <Text style={styles.firstname}>
                            Date Of Birth<Text style={styles.starStyle}>*</Text>
                        </Text>
                        <TouchableOpacity
                            onPress={() => setOpen(true)}
                            style={styles.datePickerButton}
                        >
                            <Text style={dateSelected ? styles.dateStyle : styles.dateStyle1}>
                                {dateSelected
                                    ? moment(birthDate).format('DD-MM-YYYY')
                                    : 'Enter Birth Date'}
                            </Text>
                            <VECTOR_ICONS.FontAwesome6
                                name="calendar-days"
                                size={20}
                                color={'#1C57A5'}
                            />
                        </TouchableOpacity>
                        {errorMessage !== '' && (
                            <Text style={styles.Errorstyle1}>{errorMessage}</Text>
                        )}
                        <DatePicker
                            modal
                            open={open}
                            date={birthDate}
                            mode="date"
                            maximumDate={date18YearsAgo}
                            minimumDate={date100YearsAgo}
                            onConfirm={(date) => {
                                setOpen(false);
                                setDate(date);
                                setDateSelected(true);

                                // isValidDate(date);
                                setErrorMessage('');
                            }}
                            onCancel={() => {
                                setOpen(false);
                            }}
                        />


                        <Text style={styles.firstname}>
                            Business Or Service
                            <Text style={styles.starStyle}>*</Text>
                        </Text>
                        <View style={{ marginTop: '3.3%' }}>
                            <BusinessandServiceDropdown
                                setBusiness={setBusiness}
                                Business={Business}
                                setBusinessError={setBusinessError}
                            />
                            {BusinessError && Business === null && (
                                <Text style={styles.Errorstyle1}>{BusinessError}</Text>
                            )}
                        </View>
                        <Text style={styles.firstname}>
                            Mobile Number
                        </Text>
                        <Inputfield
                            // edit={EmailEdit}
                            placeholder={'Enter Mobile Number'}
                            MaxLength={12}
                            value={phone1}
                            keyboardType="number-pad"
                            onBlur={() => {
                                if (phone1 != '' || phone1 != undefined) {
                                    setShowError(prevState => ({
                                        ...prevState,
                                        phone1error: true,
                                    }));
                                }
                            }}
                            onChangeText={(num) => {
                                if (phone1 != '' || phone1 != undefined) {
                                    setPhone1(num);
                                    setPhone1Error(ValidateMobileNo(num));
                                }
                            }}
                            ShowError={ShowError.phone1Error}
                            Error={phone1Error}
                            style={{ color: '#1C57A5', fontSize: 15, fontFamily: FONTS.semibold, paddingVertical: '4.4%', }}
                        />
                    </>
                )
                } */}